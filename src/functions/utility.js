const SCORE_THRESHOLD = 0.2; // 각도 계산 임계점
const CMP_THRESHOLD = 0.15;  // 각도 비교 임계점
/**
 * p1-p2-p3 사이각 반환 (양수: 예각, 음수: 둔각)
 * @param {JSON.predictions[0][n]} p1 첫번째 점
 * @param {JSON.predictions[0][n]} p2 두번째 점(기준점)
 * @param {JSON.predictions[0][n]} p3 세번째 점
 * @returns p1-p2-p3 사이각
 */
export function getAngle(p1, p2, p3) {
    if (p1.x === undefined || p2.x === undefined || p3.x === undefined) {
        return undefined;
    }
    var r2 = Math.atan((p2.y - p1.y) / (p2.x - p1.x));
    var r1 = Math.atan((p3.y - p2.y) / (p3.x - p2.x));
    return r2 - r1;
}
/**
 * pose estimation 결과로부터 앉은 자세의 방향 반환
 * @param {JSON.predictions} pred pose estimation JSON predictions
 * @returns "left" || "right" || "undefined"
 */
export function getSide(pred) {
    const right_hip = pred[0][8];
    const left_hip = pred[0][11];
    const right_shoulder = pred[0][2];
    const left_shoulder = pred[0][5];
    const right_ear = pred[0][16];
    const left_ear = pred[0][17];

    console.log("hip");
    if (left_hip != undefined && right_hip === undefined) return "left";
    else if (left_hip === undefined && right_hip != undefined) return "right";
    else if (left_hip != undefined && right_hip != undefined) {
        const tmp = right_hip.score - left_hip.score;
        if (Math.abs(tmp) > CMP_THRESHOLD) {
            return (tmp > 0) ? "right" : "left";
        }
    }

    console.log("shoulder");
    if (left_shoulder != undefined && right_shoulder === undefined) return "left";
    else if (left_shoulder === undefined && right_shoulder != undefined) return "right";
    else if (left_shoulder != undefined && right_shoulder != undefined) {
        const tmp = right_shoulder.score - left_shoulder.score;
        if (Math.abs(tmp) > CMP_THRESHOLD) {
            return (tmp > 0) ? "right" : "left";
        }
    }

    console.log("ear");
    if (left_ear === undefined && right_ear != undefined) return "left";
    else if (left_ear != undefined && right_ear === undefined) return "right";
    else if (left_ear != undefined && right_ear != undefined) {
        const tmp = right_ear.score- left_ear.score;
        if (Math.abs(tmp) > CMP_THRESHOLD) {
            return (tmp > 0) ? "left" : "right";
        }
    }

    console.log("can't decide side");
    return undefined;
}
/**
 * 고개 숙인 각 계산
 * @param {JSON.predictions} pred 
 * @param {"left" || "right"} side 
 * @returns 
 */
export function func1(pred, side) {
    const nose = pred[0][0];
    const right_hip = pred[0][8];
    const left_hip = pred[0][11];
    const right_ear = pred[0][16];
    const left_ear = pred[0][17];
    // 오른쪽: 8-0-16
    if (side == "right") {
        if (right_hip === undefined || nose === undefined || right_ear === undefined) {
            return undefined;
        }
        if (right_hip < SCORE_THRESHOLD || nose < SCORE_THRESHOLD || right_ear < SCORE_THRESHOLD ) {
            return undefined;
        }
        return getAngle(right_ear, nose, right_hip);
    }
    // 왼쪽: 17-0-11
    if (left_ear === undefined || nose === undefined || left_hip === undefined) {
        return undefined;
    }
    if (left_ear < SCORE_THRESHOLD || nose < SCORE_THRESHOLD || left_hip < SCORE_THRESHOLD ) {
        return undefined;
    }
    return getAngle(left_hip, nose, left_ear);
}
/**
 * 허리 숙인 각 계산
 * @param {JSON.predictions} pred 
 * @param {"left" || "right"} side 
 * @returns 
 */
export function func2(pred, side) {
    const neck = pred[0][1];
    const right_hip = pred[0][8];
    const right_knee = pred[0][9];
    const left_hip = pred[0][11];
    const left_knee = pred[0][12];
    // 오른쪽: 9-8-1
    if (side == "right") {
        if (right_knee === undefined || right_hip === undefined || neck === undefined) {
            return undefined;
        }
        if (right_knee < SCORE_THRESHOLD || right_hip < SCORE_THRESHOLD || neck < SCORE_THRESHOLD ) {
            return undefined;
        }
        return getAngle(neck, right_hip, right_knee);
    }
    // 왼쪽: 1-11-12
    if (neck === undefined || left_hip === undefined || left_knee === undefined) {
        return undefined;
    }
    if (neck < SCORE_THRESHOLD || left_hip < SCORE_THRESHOLD || left_knee < SCORE_THRESHOLD ) {
        return undefined;
    }
    return getAngle(left_knee, left_hip, neck);
}
/**
 * 다리 꼬았는지 여부 반환
 * @param {JSON.predictions} pred 
 * @param {"left" || "right"} side 
 * @returns 
 */
export function func3(pred, side) {
    const right_knee = pred[0][9];
    const right_ankle = pred[0][10];
    const left_knee = pred[0][12];
    const left_ankle = pred[0][13];

    if (side == "right") {
        if (left_knee === undefined) { console.log("31"); return false; }
        if (right_knee === undefined || left_knee.score > right_knee + CMP_THRESHOLD) {
            return true;
        }
        if (left_ankle === undefined) { console.log("32"); return false; }
        if (right_ankle === undefined && left_ankle.score > SCORE_THRESHOLD) {
            return true;
        }
        
        return true;
    }

    if (right_knee === undefined) return false;
    if (left_knee === undefined || right_knee.score > left_knee + CMP_THRESHOLD) {
        return true;
    }
    if (right_ankle === undefined) return false;
    if (left_ankle === undefined && right_ankle.score > SCORE_THRESHOLD) {
        return true;
    }
    return true;
}
/**
 * 무릎 접은 각 계산
 * @param {JSON.predictions} pred 
 * @param {"left" || "right"} side 
 * @returns 
 */
export function func4(pred, side) {
    const right_hip = pred[0][8];
    const right_knee = pred[0][9];
    const right_ankle = pred[0][10];
    const left_hip = pred[0][11];
    const left_knee = pred[0][12];
    const left_ankle = pred[0][13];
    // 다리를 꼰 경우(func4!=undefined) 무릎 각도 계산 X
    if (func3(pred, side) != false) { console.log("41"); return undefined; }
    // 오른쪽: 8-9-10
    if (side == "right") {
        if (right_hip === undefined || right_knee === undefined || right_ankle === undefined) {
            console.log("42"); 
            return undefined;
        }
        if (right_hip < SCORE_THRESHOLD || right_knee < SCORE_THRESHOLD || right_ankle < SCORE_THRESHOLD ) {
            console.log("43"); 
            return undefined;
        }
        console.log("44"); 
        return getAngle(right_ankle, right_knee, right_hip);
    }
    // 왼쪽: 13-12-11
    if (left_ankle === undefined || left_knee === undefined || left_hip === undefined) {
        return undefined;
    }
    
    if (left_ankle < SCORE_THRESHOLD || left_knee < SCORE_THRESHOLD || left_hip < SCORE_THRESHOLD ) {
        return undefined;
    }
    return getAngle(left_hip, left_knee, left_ankle);
}
export function getPose(pred) {
    const side = getSide(pred);
    if (side === undefined) return undefined;
    return [func1(pred, side), func2(pred, side), func3(pred, side), func4(pred, side)];
}

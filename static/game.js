"use strict";
var levels = [[
    [0, 0, 0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, -1, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0]],
[[0, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0],
[-1, 0, 0, -1, 0, -1, 0, 0, 0, -1, -1, 0, -1, -1, 0, -1],
[-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
[0, -1, -1, 0, -1, -1, 0, -1, 0, 0, 0, -1, -1, -1, 0, 0],
[-1, 0, -1, -1, 0, -1, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1],
[0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, -1, 0, 0],
[-1, -1, -1, 0, -1, -1, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0],
[-1, -1, -1, 0, 0, 0, -1, -1, 0, -1, 0, 0, 0, 0, -1, 0],
[0, 0, 0, 0, -1, -1, -1, -1, 0, 0, -1, 0, 0, 0, -1, 0],
[0, 0, 0, -1, 0, -1, 0, 0, -1, -1, 0, -1, -1, 0, 0, -1],],
[[-1, -1, -1, 0, 0, -1, -1, 0, -1, 0, 0, 0, -1, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, -1, 0, 0],
[-1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 0, -1, -1, 0, 0, -1, -1, 0, 0, -1, -1, -1, 0, -1, 0, -1],
[-1, -1, -1, -1, 0, -1, 0, 0, 0, -1, -1, -1, 0, -1, -1, 0, -1, 0, -1, 0, 0, 0, -1, 0, -1, -1],
[0, -1, 0, -1, -1, 0, 0, -1, -1, 0, -1, 0, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, -1, -1, 0, -1],
[-1, 0, 0, -1, 0, 0, -1, 0, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0, -1, -1, -1, 0, 0, 0],
[-1, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, -1, 0, -1, -1, -1, -1],
[-1, -1, -1, 0, -1, 0, 0, 0, 0, 0, -1, 0, -1, 0, -1, -1, -1, -1, -1, 0, 0, 0, -1, 0, -1, -1],
[0, 0, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, 0, -1, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, -1, 0],
[-1, -1, 0, 0, -1, 0, 0, 0, -1, 0, -1, 0, 0, 0, -1, -1, 0, 0, -1, 0, -1, -1, 0, -1, -1, 0],
[-1, 0, -1, 0, 0, 0, -1, 0, -1, -1, -1, 0, -1, -1, 0, 0, 0, -1, -1, 0, 0, -1, 0, -1, -1, -1],
[-1, -1, -1, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, -1, -1, 0, -1, -1, 0, -1, 0, 0, -1, 0, 0, -1],
[-1, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, -1, -1, 0, -1, -1, 0, -1, -1, -1, 0, -1, -1, 0, 0, -1],
[0, 0, 0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, -1, -1, 0, -1, -1],
[-1, -1, 0, -1, 0, -1, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, -1, -1, -1, -1, -1, 0, 0, -1, 0, -1],],
[[0, 0, -1, -1, 0, -1],
[-1, -1, 0, 0, 0, -1],
[0, -1, -1, -1, 0, 0],
[0, -1, -1, 0, -1, -1],
[0, -1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, -1],
[-1, -1, -1, -1, 0, -1],
[0, 0, -1, -1, -1, -1],],
[[-1, 0, 0, 0, -1, -1, -1, 0, 0],
[0, -1, 0, 0, 0, 0, -1, 0, 0],
[-1, -1, -1, -1, 0, -1, -1, 0, -1],
[-1, -1, -1, 0, 0, -1, -1, -1, 0],
[0, -1, 0, 0, 0, 0, 0, -1, 0],]
];
var levelData = [
    {
        "acRateLimit": 1,
        "statusNumLimit": 6,
        "score": 0
    },
    {
        "acRateLimit": 5,
        "statusNumLimit": 20,
        "score": 0
    },
    {
        "acRateLimit": 3,
        "statusNumLimit": 30,
        "score": 0
    },
    {
        "acRateLimit": 2,
        "statusNumLimit": 10,
        "score": 0
    },
    {
        "acRateLimit": 2,
        "statusNumLimit": 10,
        "score": 0
    },
]
var statusBlock = ["AC", "WA", "PE", "TLE", "MLE", "OLE", "RE", "CE", "UKE"];
var dx = [[0, -1], [0, 1], [1, 0], [-1, 0], [1, -1], [1, 1], [-1, -1], [-1, 1]]
//左 右 上 下 左上 右上 左下 右下
var tmpLevel;
var acRate = 0, statusNum = 0, levelId = 0, NWS = 0;
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.items.length;
    }
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}
function dcopy(a) {
    return JSON.parse(JSON.stringify(a));
}
function init() {
    acRate = 0;
    statusNum = 0;
    for (let i = 0; i < document.querySelector("#game_st_c_t_lnNum").clientHeight; i += 20) {
        let li = document.createElement("li");
        document.querySelector("#game_st_c_t_lnNum").appendChild(li);
    }
    document.querySelector("#game_st_c_t_lnNum").querySelectorAll("li").forEach((item, index) => {
        item.innerHTML = index + 1;
    });
    for (let i = 0; i < levelData.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `<div class="levelid">P${1000 + i}</div><div class="record"></div>`;
        document.querySelector("#game_l_sel").appendChild(li);
    }
    document.querySelectorAll(".record").forEach((item, index) => {
        if (levelData[index].score < 100) item.style.color = "var(--false-color)";
        else item.style.color = "var(--true-color)";
        item.innerHTML = levelData[index].score;
    });
}
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event, i, j) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    let result = fill(i, j, data.match(/game_m_sl_(\S*)/)[1].toUpperCase());
    if (typeof (result) != "number") {
        document.getElementById("game_m_sc_stBlockNum").innerText = statusNum;
        document.getElementById("game_m_sc_ac").innerText = acRate;
        document.getElementById("game_m_sc_fill").innerText = result[0] + "/" + result[1];
    }
}
function max(a, b) {
    return a > b ? a : b;
}
function fill(x, y, st) {
    if (tmpLevel[x][y] == -1 && st != "reset") return -1;
    acRate = 0;
    let NoEmptyStatus = 0, NoWallStatus = 0, isF = false;
    switch (st) {
        case "AC":
            if (tmpLevel[x][y] < 1) {
                tmpLevel[x][y] = 1;
                isF = true;
            }
            break;
        case "WA":
            if (tmpLevel[x][y] <= 2) {
                if (tmpLevel[x][y] == 2) tmpLevel[x][y] = 1;
                else tmpLevel[x][y] = 2;
                isF = true;
            }
            else break;
            let f = 0;
            for (let i = 0; i < 8; i++) {
                let tmpX = x, tmpY = y;
                f = 0;
                do {
                    tmpX += dx[i][0];
                    tmpY += dx[i][1];
                    if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0) {
                        f = 1;
                        break;
                    }
                } while (tmpLevel[tmpX][tmpY] == -1)
                if (!f) {
                    if (tmpLevel[tmpX][tmpY] == 2) {
                        tmpLevel[tmpX][tmpY] = 1;
                    } else if (tmpLevel[tmpX][tmpY] < 2) tmpLevel[tmpX][tmpY] = 2;
                }
            }
            break;
        case "PE":
            if (tmpLevel[x][y] < 3) {
                tmpLevel[x][y] = 3;
                isF = true;
            }
            break;
        case "TLE":
            if (tmpLevel[x][y] < 6) {
                tmpLevel[x][y] = 4;
                isF = true;
            }
            else break;
            for (let i = 0; i < 8; i++) {
                let tmpX = x, tmpY = y;
                tmpX += dx[i][0];
                tmpY += dx[i][1];
                if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0 || tmpLevel[tmpX][tmpY] == -1 || tmpLevel[x][y] > 6) continue;
                tmpLevel[tmpX][tmpY] = 4;
            }
            break;
        case "MLE":
            if (tmpLevel[x][y] < 6) {
                tmpLevel[x][y] = 5;
                isF = true;
            }
            else break;
            for (let i = 0; i < 8; i++) {
                let tmpX = x, tmpY = y;
                tmpX += dx[i][0];
                tmpY += dx[i][1];
                if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0 || tmpLevel[tmpX][tmpY] == -1 || tmpLevel[x][y] > 6) continue;
                tmpLevel[tmpX][tmpY] = 5;
            }
            break;
        case "OLE":
            if (tmpLevel[x][y] <= 6) {
                tmpLevel[x][y] = 6;
                isF = true;
            }
            else break;
            for (let i = 0; i < 8; i++) {
                let tmpX = x, tmpY = y;
                tmpX += dx[i][0];
                tmpY += dx[i][1];
                if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0 || tmpLevel[tmpX][tmpY] == -1 || tmpLevel[x][y] > 6) continue;
                tmpLevel[tmpX][tmpY] = 6;
            }
            break;
        case "RE":
            if (tmpLevel[x][y] <= 7) {
                tmpLevel[x][y] = 7;
                isF = true;
            }
            else break;
            for (let j = -2; j <= 2; j++) {
                for (let k = -2; k <= 2; k++) {
                    let tmpX = x, tmpY = y;
                    tmpX += j;
                    tmpY += k;
                    if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0 || tmpLevel[tmpX][tmpY] == -1 || tmpLevel[tmpX][tmpY] > 7) continue;
                    tmpLevel[tmpX][tmpY] = 7;
                }
            }
            break;
        case "CE":
            let q = new Queue();
            if (tmpLevel[x][y] < 8) {
                tmpLevel[x][y] = 8;
                isF = true;
            }
            else break;
            q.enqueue([x, y]);
            while (!q.isEmpty()) {
                let nowX = q.peek()[0], nowY = q.peek()[1];
                q.dequeue();
                for (let i = 0; i < 4; i++) {
                    let newX = nowX + dx[i][0];
                    let newY = nowY + dx[i][1];
                    if (newX > tmpLevel.length - 1 || newY > tmpLevel[0].length - 1 || newX < 0 || newY < 0 || tmpLevel[newX][newY] == -1 || tmpLevel[newX][newY] >= 8) continue;
                    tmpLevel[newX][newY] = 8;
                    q.enqueue([newX, newY]);
                }
            }
            break;
        case "UKE":
            tmpLevel[x][y] = 9;
            isF = true;
            for (let i = 0; i < 8; i++) {
                let tmpX = x, tmpY = y;
                tmpX += dx[i][0];
                tmpY += dx[i][1];
                if (tmpX > tmpLevel.length - 1 || tmpY > tmpLevel[0].length - 1 || tmpX < 0 || tmpY < 0) continue;
                if (tmpLevel[tmpX][tmpY] == -1) tmpLevel[tmpX][tmpY] = randomNum(1, 9);
                else tmpLevel[tmpX][tmpY] = 9;
            }
            break;
        case "reset":
            tmpLevel = dcopy(levels[levelId]);
            statusNum = 0;
            let tr = document.querySelectorAll("tr");
            tr.forEach((item, index) => {
                item.querySelectorAll("td").forEach((item1, index1) => {
                    item1.className = `tb_${tmpLevel[index][index1]}`;
                    item1.innerHTML = "";
                });
            });
            return [0, 0];
    }
    let tr = document.querySelectorAll("tr");
    tr.forEach((item, index) => {
        item.querySelectorAll("td").forEach((item1, index1) => {
            item1.className = `tb_${tmpLevel[index][index1]}`;
            if (tmpLevel[index][index1] >= 1) item1.innerHTML = statusBlock[tmpLevel[index][index1] - 1];
        });
    });
    for (let i = 0; i < tmpLevel.length; i++) {
        for (let j = 0; j < tmpLevel[0].length; j++) {
            if (tmpLevel[i][j] >= 0) {
                NoWallStatus++;
                if (tmpLevel[i][j] > 0) NoEmptyStatus++;
                if (tmpLevel[i][j] == 1) acRate++;
            }
        }
    }
    if (isF) statusNum++;
    return [NoEmptyStatus, NoWallStatus];
}
function game_reset() {
    fill(0, 0, "reset");
    document.getElementById("game_m_sc_stBlockNum").innerText = statusNum;
    document.getElementById("game_m_sc_ac").innerText = acRate;
    document.getElementById("game_m_sc_fill").innerText = "0/" + NWS;
}
window.onload = function () {
    let ismove = false, ptop = 0, pleft = 0;
    init();
    let table = document.querySelectorAll("table")[0];
    document.querySelectorAll(".levelid").forEach((item, index) => {
        item.onclick = function () {
            levelId = index;
            tmpLevel = dcopy(levels[levelId]);
            table.innerHTML = "";
            for (let i = 0; i < tmpLevel.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < tmpLevel[0].length; j++) {
                    let td = document.createElement("td");
                    td.classList.add(`tb_${tmpLevel[i][j]}`);
                    td.setAttribute("ondrop", `drop(event,${i},${j})`);
                    td.setAttribute("ondragover", "allowDrop(event)");
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            for (let i = 0; i < tmpLevel.length; i++) {
                for (let j = 0; j < tmpLevel[0].length; j++) {
                    if (tmpLevel[i][j] == 0) {
                        NWS++;
                    }
                }
            }
            document.querySelector("#game_main").classList.add("show");
        }
    });
    document.querySelector("#game_m_sc_fill").innerHTML = "0/" + NWS;
    const move_table = document.querySelectorAll("table")[0];
    document.getElementById("game_st_info").onclick = () => {
        document.getElementById("game_info").classList.add("show");
        document.querySelectorAll(".window_masker")[0].classList.add("show");
    };
    document.getElementById("game_st_help").onclick = () => {
        document.getElementById("game_help").classList.add("show");
        document.querySelectorAll(".window_masker")[0].classList.add("show");
    };
    document.getElementById("game_st_c_n_run").onclick = () => {
        document.getElementById("game_level").classList.add("show");
        document.querySelectorAll(".window_masker")[0].classList.add("show");
    };
    document.querySelectorAll(".window_back").forEach((item) => {
        item.onclick = () => {
            document.querySelectorAll(".window").forEach((item) => {
                if (item.classList.contains("show")) {
                    item.classList.remove("show");
                }
            });
            document.querySelectorAll(".window_masker")[0].classList.remove("show");
        }
    });
    move_table.onmousedown = (e) => {
        ptop = e.clientY - move_table.offsetTop;
        pleft = e.clientX - move_table.offsetLeft;
        ismove = true;
    };
    document.onmousemove = (e) => {
        if (ismove) {
            let ele_top = e.clientY - ptop;
            let ele_left = e.clientX - pleft;
            move_table.style.top = ele_top + "px";
            move_table.style.left = ele_left + "px";
        }
    };
    document.onmouseup = () => {
        ismove = false;
    };
    document.getElementById("game_m_reset").onclick = () => {
        game_reset();
    };
    document.getElementById("game_m_back").onclick = () => {
        let baseF = document.getElementById("game_m_sc_fill").innerText.match(/(\S*)\/(\S*)/);
        if (baseF[1] == baseF[2]) {
            if (acRate >= levelData[levelId].acRateLimit) {
                levelData[levelId].score += 50;
            }
            if (statusNum <= levelData[levelId].statusNumLimit) {
                levelData[levelId].score += 50;
            }
            let item = document.querySelectorAll(".record")[levelId];
            if (levelData[levelId].score < 100) item.style.color = "var(--false-color)";
            else item.style.color = "var(--true-color)";
            item.innerHTML = max(levelData[levelId].score, Number(item.innerHTML));
            game_reset();
            document.getElementById("game_main").classList.remove("show");
        } else {
            if (confirm("您还未完成游戏，请问真的要退出吗？")) {
                game_reset();
                document.getElementById("game_main").classList.remove("show");
            }
        }
    };
};
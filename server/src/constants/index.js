export const GAME_LEVEL = {
    VERY_EASY: "VERY_EASY",
    EASY: "EASY",
    NORMAL: "NORMAL",
    HARD: "HARD",
    VERY_HARD: "VERY_HARD",
    IMPOSSIBLE: "IMPOSSIBLE"
}


export const GAME_STATUS = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN_PROGRESS",
    FINISHED: "FINISHED"
}

export const GAME_SETTINGS = {
    [GAME_LEVEL.VERY_EASY]: {
        max: 99,
        time: 5000
    },
    [GAME_LEVEL.EASY]: {
        max: 999,
        time: 5000
    },
    [GAME_LEVEL.NORMAL]: {
        max: 9999,
        time: 4000
    },
    [GAME_LEVEL.HARD]: {
        max: 999999,
        time: 4000
    },
    [GAME_LEVEL.VERY_HARD]: {
        max: 99999999,
        time: 3000
    },
    [GAME_LEVEL.IMPOSSIBLE]: {
        max: 999999999999,
        time: 2500
    }
}

export const THRESHOLD = 35;
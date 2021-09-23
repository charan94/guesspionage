export const GAME_LEVEL = {
    VERY_EASY: "VERY_EASY",
    EASY: "EASY",
    NORMAL: "NORMAL",
    HARD: "HARD",
    VERY_HARD: "VERY_HARD",
    IMPOSSIBLE: "IMPOSSIBLE"
}


export const GAME_STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    FINISHED: "FINISHED"
}

export const GAME_SETTINGS = {
    [GAME_LEVEL.VERY_EASY]: {
        max: 99,
        time: 5,
        difficulty: 1,
        count: 5
    },
    [GAME_LEVEL.EASY]: {
        max: 999,
        time: 5,
        difficulty: 2,
        count: 5
    },
    [GAME_LEVEL.NORMAL]: {
        max: 9999,
        time: 4,
        difficulty: 3,
        count: 6
    },
    [GAME_LEVEL.HARD]: {
        max: 999999,
        time: 4,
        difficulty: 4,
        count: 6
    },
    [GAME_LEVEL.VERY_HARD]: {
        max: 99999999,
        time: 3,
        difficulty: 5,
        count: 8
    },
    [GAME_LEVEL.IMPOSSIBLE]: {
        max: 999999999999,
        time: 3,
        difficulty: 6,
        count: 8
    }
}

export const THRESHOLD = 10;
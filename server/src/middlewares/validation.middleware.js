import { systemLogger } from "../config/logger";
import { validationResult } from 'express-validator';

export const validateRequest = (request, response, next) => {
    const errors = validationResult(request).array();
    if (errors.length > 0) {
        // Log route access failure event.
        systemLogger.info({
            message: `An error occurred during the routing process due to missing request parameter(s).`,
        });

        // Log which validation errors occured.
        systemLogger.info({
            message: errors,
        });

        // Return failure response.
        return next({
            status: 400,
            message: 'Missing request parameter(s)',
        });
    }

    // Return to next middleware/controller.
    return next();
};
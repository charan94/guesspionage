/**
 * error.middleware.ts
 *
 * Maintained by Sai Charan Krishnagiri, 2020
 *
 * @file error.middleware.ts
 * @author Sai Charan Krishnagiri
 */

/**
 * Middleware that returns error reesponse
 * @param error
 * @param request
 * @param response
 * @param next
 * @returns status and error messages
 */
async function errorMiddleware(
    error,
    request,
    response,
    next
) {
    response.status(error.status || 500).send({
        status: error.status || 500,
        error: error && error.message ? error.message : error,
    });
}

export default errorMiddleware;

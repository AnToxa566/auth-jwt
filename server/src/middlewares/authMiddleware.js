import tokenService from "../services/tokenService.js";
import ApiException from "../exceptions/apiException.js";

export default function (req, res, next) {
  try {
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[1]
    ) {
      const decoded = tokenService.verifyAccessToken(
        req.headers.authorization.split(" ")[1]
      );

      if (!decoded) {
        throw ApiException.unauthorized("User is not authorized");
      }

      req.user = decoded;
      next();
    } else {
      throw ApiException.unauthorized("User is not authorized");
    }
  } catch (err) {
    next(err);
  }
}

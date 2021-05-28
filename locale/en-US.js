const dictionaryENUS = {
  errors: {
    notAuthorized: "unauthorized",
    notAuthenticated: "user not authorized",
    invalidData: "invalid data",
    operationNotAllowed: "Operation not allowed",
    validate: {
      maxCharactersAllowed: "max characters exceeded",
      emptyData: "empty data",
      invalidUsername: "invalid username",
      invalidName: "invalid name",
      invalidEmail: "invalid email",
      passwordsDontMatch: "passwords don't match",
      invalidPassword: "invalid password",
      invalidRole: "invalid role",
    },
    user: {
      userExists: "user already exists",
      userNotExists: "user not exists",
      onUpdate: "error while updating user",
      onCreate: "error while creating user",
      onDelete: "error while deleted user",
    },
    tweet: {
      onDelete: "error while deleted tweet",
      tweetNotExists: "tweet not exists",
    },
  },
  success: {
    user: {
      onUpdate: "user updated successfully",
      onCreate: "user created successfully",
      onUpdate: "user updated successfully",
      onDelete: "user removed successfully",
    },
    tweet: {
      onCreate: "tweet created successfully",
      onUpdate: "tweet updated successfully",
      onDelete: `tweet removed successfully`,
    },
  },
};

module.exports = { dictionaryENUS };

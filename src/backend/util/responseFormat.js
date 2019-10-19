var CreateResponse = function CreateResponse(data, errorMessages) {
    return {
      status: errorMessages && errorMessages.length ? "error" : "success",
      data: data,
      messages: errorMessages
    };
  };
  
  exports.CreateResponse = CreateResponse;
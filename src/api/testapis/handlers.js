export let hello = (request, h) => {
    if(request.query.name) {
      return "Hello, " +request.query.name
    }
    return "Hello, World";
};


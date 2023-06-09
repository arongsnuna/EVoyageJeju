const wrapper = asyncFn => {
    return (async (req, res, next) => {
      try {
        return await asyncFn(req, res, next);
      } catch (error) {
        return next(error);
      }
    });
  };

  export {wrapper};
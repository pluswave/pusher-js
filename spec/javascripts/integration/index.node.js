var sharedTestsContext = require.context("./core", true, /_spec$/);
sharedTestsContext.keys().forEach(sharedTestsContext);

// var nodeTestsContext = require.context("./node", true, /_spec$/);
// nodeTestsContext.keys().forEach(nodeTestsContext)

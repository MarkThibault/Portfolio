const del = require("del");
del([
	"./dist",
    "./node_modules",
]).then(paths => {
	console.log("Deleted files and folders:\n", paths.join("\n"));
});
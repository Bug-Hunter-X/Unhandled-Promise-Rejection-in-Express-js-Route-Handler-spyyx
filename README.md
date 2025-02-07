# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  Failure to properly handle errors in asynchronous operations can lead to unexpected crashes or silent failures, hindering application stability and making debugging difficult. 

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows the corrected version with comprehensive error handling.
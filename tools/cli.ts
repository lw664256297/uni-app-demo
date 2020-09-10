#!/usr/bin/env node
/**
 * Command line tool, 可以根据实际需要修改
 */

"use strict";

import * as yargs from "yargs";
import add from "./command/add";
import store from "./command/store";

// tslint:disable-next-line
let version = require("../package.json").version;

yargs
  .command(add)
  // add store
  .command(store)
  // add router
  .version(version)
  .alias("version", "v")
  .help().argv;

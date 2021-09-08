"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xlsx = _interopRequireDefault(require("xlsx"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exportarExcel(workSheetName, data, filePath) {
  const workBook = _xlsx.default.utils.book_new();

  for (let index = 0; index < data.length; index++) {
    const objeto = data[index];
    const sheetName = workSheetName[index];

    const workSheet = _xlsx.default.utils.json_to_sheet(objeto);

    _xlsx.default.utils.book_append_sheet(workBook, workSheet, sheetName);
  }

  _xlsx.default.writeFile(workBook, _path.default.resolve(filePath));
}

var _default = {
  exportarExcel
};
exports.default = _default;
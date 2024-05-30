export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != 'string') {
      throw new TypeError('Name must be string');
    } else if (typeof length != 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array')
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name != 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length != 'number') {
      throw new TypeError('Number must be number');
    }
    this._number = number;
  }

  set students(students) {
    if (!Array.isArray(stdents)) {
      throw new TypeError('Students must be an array');
    } 
    this._students = students;
  }
}

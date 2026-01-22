import { findWordInProject } from './project_word_finder.js';
import { uuid } from './uuid.js';

const quarrysync = {
  uuid,
  findWordInProject: findWordInProject
};

export default quarrysync;

// also allow this
export { uuid, findWordInProject };

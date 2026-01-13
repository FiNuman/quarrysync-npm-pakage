import { findWordInProject } from './project_word_finder';
import { uuid } from './uuid';

const quarrysync = {
  uuid,
  findWordInProject: findWordInProject
};

export default quarrysync;

// also allow this
export { uuid, findWordInProject };

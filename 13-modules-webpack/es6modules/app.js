import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
//accessing the other module in the relative path file.
//no global access to variables, modules.
//think of it as self-contained.
import { apiKey, url, sayHi }from './src/config';

import User, { createURL, gravatar } from './src/user';


const wes = new User('wes bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(image); 
console.log(profile);
console.log(wes);

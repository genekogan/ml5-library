// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/*
General Feature Extractor Manager
*/

import * as tf from '@tensorflow/tfjs';
import * as tsne from '@tensorflow/tfjs-tsne';

const tSNE = async () => {
  console.log('this is inside tsne');

  // Create some data
  const data = tf.randomUniform([2000, 10]);
  console.log(data);
  const embedder = tsne.tsne(data);
  console.log(embedder);
  embedder.iterateKnn(10);
  console.log('the end');
};

export default tSNE;

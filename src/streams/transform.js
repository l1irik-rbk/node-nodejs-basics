import { Transform, pipeline } from 'stream';

export const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;

  const transformation = new Transform({
    transform(chunk, enc, cb) {
      const chunkedString = chunk.toString().trim();
      const reversedChunkedString = chunkedString.split('').reverse().join('');
      this.push(`${reversedChunkedString}\n`);
      cb();
    },
  });
  pipeline(readable, transformation, writable, (err) => console.error(err));
};
transform();

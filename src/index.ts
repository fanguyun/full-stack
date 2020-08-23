import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  console.log('orm -->', orm);
  const post = orm.em.create(Post, { title: 'my first post' });
  await orm.em.persistAndFlush(post);
  console.log('-------- sql2 --------');
  await orm.em.nativeInsert(Post, { title: 'my first post 2' });
};

main().catch((err) => {
  console.error(err);
});

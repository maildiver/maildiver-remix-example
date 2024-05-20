import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Maildiver with Remix' },
    { name: 'description', content: 'Maildiver Remix Example' },
  ];
};

export default function Index() {
  return <h1>Maildiver with Remix</h1>;
}

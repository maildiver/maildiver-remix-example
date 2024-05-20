import { json } from '@remix-run/node';
import { maildiver } from './maildiver';

export const action = async () => {
  try {
    const maildiverRes = await maildiver.email.send({
      to: 'sudo@example.com',
      from: 'you@example.com',
      subject: 'Email from the Maildiver Node.js SDK',
      html: '<p>Hi {{ firstName }}! Maildiver Node.js SDK is awesome!</p>',
      variables: {
        values: {
          firstName: 'Developer Name',
        },
        default_values: {
          fistName: 'there',
        },
      },
    });

    return json(maildiverRes, 200);
  } catch (err) {
    return json(err, 400);
  }
};

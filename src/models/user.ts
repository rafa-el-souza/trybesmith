import { PrismaClient } from '@prisma/client';

import { Credentials, NewUser } from '../interfaces';

const prisma = new PrismaClient();

export const subscription = (newUser: NewUser) => prisma.users.create({
  data: newUser,
  select: {
    id: true,
  },
})
  .then((result) => result)
  .finally(async () => {
    await prisma.$disconnect();
  });

export const login = ({ username, password }: Credentials) => prisma.users.findFirst({
  where: { username, password },
})
  .then((result) => result)
  .finally(async () => {
    await prisma.$disconnect();
  });

export default {
    
};
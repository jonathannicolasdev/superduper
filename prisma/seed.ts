/**
 * EDITME: Change or reorder seed functions
 */

import bcrypt from "bcryptjs";

import { dataUserRoles } from "~/data";
import { prisma } from "~/libs";
import { dataArtists } from "./data/artists";
import { dataArtworks } from "./data/artworks";
import { dataExhibitions } from "./data/exhibitions";

async function seed() {
  // await seedUsers();
  // await seedArtists();
  // await seedArtworks();
  await seedExhibitions();
}

/**
 * -----------------------------------------------------------------------------
 * Various seed functions
 * -----------------------------------------------------------------------------
 */

export async function seedUsers() {
  // ---------------------------------------------------------------------------
  console.info("Seed user roles...");
  await prisma.userRole.deleteMany();

  await prisma.userRole.createMany({
    data: dataUserRoles,
  });
  const adminUserRole = await prisma.userRole.findFirst({
    where: { symbol: "ADMIN" },
  });

  // ---------------------------------------------------------------------------
  console.info("👤 Seed users...");
  await prisma.user.deleteMany();

  const { REMIX_ADMIN_EMAIL, REMIX_ADMIN_PASSWORD } = process.env;

  const hashedPassword = await bcrypt.hash(String(REMIX_ADMIN_PASSWORD), 10);

  const user = await prisma.user.create({
    data: {
      email: String(REMIX_ADMIN_EMAIL),
      name: "Admin",
      username: "admin",
      phone: "+1234567890",
      password: { create: { hash: hashedPassword } },
      roleId: adminUserRole?.id,
    },
  });
}

export async function seedArtists() {
  console.info("🎨 Seed artists...");
  await prisma.artist.deleteMany();
  await prisma.artist.createMany({
    data: dataArtists,
  });
}

export async function seedArtworks() {
  console.info("🎨 Seed artworks...");
  await prisma.artwork.deleteMany();

  const artists = await prisma.artist.findMany();

  const dataArtworksWithArtists = dataArtworks.map((artwork, index) => {
    return {
      ...artwork,
      artistId: artists[index].id,
    };
  });

  await prisma.artwork.createMany({
    data: dataArtworksWithArtists,
  });
}

export async function seedExhibitions() {
  console.info("🎨 Seed exhibitions...");
  await prisma.exhibition.deleteMany();
  await prisma.exhibition.createMany({
    data: dataExhibitions,
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { CustomError } from "../errors/custom-error";

interface UserOptions {
  id: number;
  email: string;
  name: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  userImage?: string;
}

export class UserEntity {
  readonly id: number;
  readonly email: string;
  readonly name: string;
  readonly password: string;
  readonly isVerified: boolean;
  readonly createdAt: Date;
  readonly userImage: string;

  constructor(options: UserOptions) {
    this.id = options.id;
    this.email = options.email;
    this.name = options.name;
    this.password = options.password;
    this.isVerified = options.isVerified;
    this.createdAt = options.createdAt;
    this.userImage = options.userImage || "";
  }

  fromObject(object: { [key: string]: any }) {
    const { id, email, name, password, isVerified, createdAt, userImage } =
      object;

    if (!id) {
      throw CustomError.badRequest("Missing id");
    }
    if (!email) {
      throw CustomError.badRequest("Missing email");
    }
    if (!name) {
      throw CustomError.badRequest("Missing name");
    }
    if (!password) {
      throw CustomError.badRequest("Missing password");
    }
    if (isVerified === undefined) {
      throw CustomError.badRequest("Missing isVerified");
    }
    if (!createdAt) {
      throw CustomError.badRequest("Missing createdAt");
    }

    return new UserEntity({
      id,
      email,
      name,
      password,
      isVerified,
      createdAt,
      userImage,
    });
  }
}

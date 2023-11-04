//external
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
//enums
import { Gender } from "../enums/Gender";

export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column({ name: "name", type: "string", length: 40, nullable: false })
  name: string;

  @Column({ name: "lastname", type: "string", length: 40, nullable: false })
  lastname: string;

  @Column({ name: "age", type: "int", nullable: false })
  age: number;

  @Column({
    name: "gender",
    type: "enum",
    enum: Gender,
    default: Gender.NO_GENDER,
    nullable: false,
  })
  gender: Gender;

  @Column({ name: "doc_type", type: "string", length: 17, nullable: false })
  docType: string;

  @Column({ name: "doc_number", type: "string", length: 15, nullable: false })
  docNumber: string;

  @Column({ name: "email", type: "string", length: 50, nullable: false })
  email: string;

  @Column({ name: "phone_number", type: "string", length: 25, nullable: false })
  phoneNumber: string;

  @Column({ name: "start_date", type: "date", nullable: false })
  startDate: Date;

  @Column({ name: "weekly_hs_quantity", type: "int", nullable: false })
  weeklyHsQuantity: number;

  @Column({
    name: "salary",
    type: "decimal",
    precision: 6,
    scale: 3,
    nullable: false,
  })
  salary: number;

  @CreateDateColumn({
    name: "creation_date",
    type: "datetime",
    nullable: false,
  })
  creationDate: Date;

  @UpdateDateColumn({ name: "update_date", type: "datetime", nullable: false })
  updateDate: Date;
}

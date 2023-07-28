import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("todos")
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ default: false })
    completed: boolean
}
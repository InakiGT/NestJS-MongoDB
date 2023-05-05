import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skill {
  @Prop({ required: true })
  name: string;

  @Prop()
  color: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

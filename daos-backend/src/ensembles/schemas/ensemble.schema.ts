import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// To run server use these imports
//import { Profile } from 'src/profiles/schemas/profile.schema';

// To run tests use these imports
//import { Profile } from './../../../src/profiles/schemas/profile.schema';
import { Profile } from './../../profiles/schemas/profile.schema';
// cannot read if the folder steps more step back -- WHY?!

import * as mongoose from 'mongoose';

export type EnsembleDocument = Ensemble & Document;

@Schema()
export class Posts {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop({required: true})
    instrument: string;

    @Prop({required: true})
    minimumSkillLevel: string;

    @Prop()
    genre: string[]
}

@Schema()
export class Ensemble {

    @Prop({required: true})
    name: string;

    @Prop()
    description: string;
    
    @Prop()
    website: string;
    
    @Prop({required: true})
    zipCode: string;
    
    @Prop({required: true})
    city: string;
    
    @Prop({required: true})
    activeMusicians: string;
    
    @Prop()
    practiceFrequency: string;
    
    @Prop()
    continuously: boolean;
    
    @Prop()
    projectBased: boolean;
    
    @Prop()
    genre: string[];
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Profile.name})
    admin: Profile;

    @Prop([Posts])
    posts: Posts[];
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);
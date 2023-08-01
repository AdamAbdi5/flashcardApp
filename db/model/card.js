import {Model} from '@nozbe/watermelondb'
import {field, text, date, relation} from '@nozbe/watermelondb/decorators'
export default class Card extends Model {
    static table='cards'
    static associations ={
        decks :{type:'belongs_to', key:'deck_id'}
    }

    @relation('decks', 'deck_id') deck
    @text('front') front
    @text('back') back
    @field('type') type
    @date('date_learnt') date_learnt
    @date('date_to_learn') date_to_learn
}
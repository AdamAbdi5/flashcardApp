import {Model} from '@nozbe/watermelondb'
import {field, text, date, children} from '@nozbe/watermelondb/decorators'

export default class Deck extends Model {
    static table='decks'
    static associations= {
        cards: {type: 'has_many', foreignKey: 'deck_id'},
        checked: {type: 'has_many', foreignKey: 'deck_id'}
    }

    @children('cards') cards
    @children('checked') checked
    @text('name') name
    @field('latest') latest
    @field('learn') learn
    @field('learnt') learnt
    @field('cards') cards
}
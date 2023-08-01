import {Model} from '@nozbe/watermelondb'
import {date, field, relation} from '@nozbe/watermelondb/decorators'

export default class Check extends Model {
    static table = 'checked'
    static associations = {
        decks: {typeof: 'belongs_to', key: 'deck_id'}
    }

    @relation('decks', 'deck_id') deck
    @field ('cards_learnt') cards_learnt
    @date ('date_learnt') date_learnt
}
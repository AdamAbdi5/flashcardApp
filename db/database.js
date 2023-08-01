import {Database} from '@nozbe/watermelondb'
import SqLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from './schema'
import Deck from './model/deck'
import Check from './model/check'
import Card from './model/card'


const adapter = new SqLiteAdapter({
    schema
})

const database = new Database({
    adapter,
    modelClasses: [Deck, Check, Card]
})

export default database
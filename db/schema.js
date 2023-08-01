import { appSchema, tableSchema } from "@nozbe/watermelondb";

const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'decks',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'latest', type: 'number', isOptional: true},
                {name: 'learn', type: 'number', isOptional: true},
                {name: 'learnt', type: 'number', isOptional: true},
                {name: 'cards', type: 'number', isOptional: true}
                
            ]
        }),
        tableSchema({
            name: 'cards',
            columns: [
                {name: 'deck_id', type: 'string', isIndexed: true},
                {name: 'front', type: 'string'},
                {name: 'back', type: 'string'},
                {name: 'type', type: 'string'},
                {name: 'date_learnt', type: 'number', isOptional: true},
                {name: 'date_to_learn', type: 'number', isOptional: true} 
               
            ]
        }),
        tableSchema({
            name: 'checked',
            columns: [
                {name: 'deck_id', type: 'string', isIndexed: true},
                {name: 'cards_learnt', type: 'number', isOptional: true},
                {name: 'date_learnt', type: 'number', isOptional: true}
            ]

        })
    ]
})

export default schema
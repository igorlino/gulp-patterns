/*jshint -W079 */
var mockData = (function() {
    return {
        getMockCustomers: getMockCustomers
    };

    function getMockCustomers() {
        return [
            {
                'id': 1017109,
                'name': 'Black Widow',
                'city': 'Albany',
                'state': 'NY',
                'thumbnail': {
                    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/a/03/523219743a99b',
                    'extension': 'jpg'
                }
            },
            {
                'id': 1017105,
                'name': 'Captain America',
                'city': 'Loudonville',
                'state': 'NY',
                'thumbnail': {
                    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/52321928eaa72',
                    'extension': 'jpg'
                }
            },
            {
                'id': 1017108,
                'name': 'Hawkeye',
                'city': 'Bothell',
                'state': 'WA',
                'thumbnail': {
                    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/4/03/5232198a81c17',
                    'extension': 'jpg'
                }
            },
            {
                'id': 1017104,
                'name': 'Iron Man',
                'city': 'Orlando',
                'state': 'FL',
                'thumbnail': {
                    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5232190d42df2',
                    'extension': 'jpg'
                }
            },
            {
                'id': 1017106,
                'name': 'Thor',
                'city': 'Raleigh',
                'state': 'NC',
                'thumbnail': {
                    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/2/03/52321948a51f2',
                    'extension': 'jpg'
                }
            }
        ];
    }
})();

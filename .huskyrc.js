'use strict'

module.exports = {
    'hooks': {
        'pre-push': 'echo pre push check',
        'pre-commit': 'echo pre commit check',
        'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS'
    }
}
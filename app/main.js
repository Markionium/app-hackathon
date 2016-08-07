import LoadingMask from '../components/LoadingMask.js';
import Content from '../components/Content.js';
import Card from '../components/Card.js';
import Cards from '../components/Cards.js';
import { EmojiPicker, Emojis } from '../components/Emojis.js';
import store from '../helpers/store.js';
import { loadInitialData, addEmojiForItem, loadOtherObjectType } from './actions.js';
import { initDataStoreForApp } from './dataStore.js';
import SelectField from '../components/SelectField.js';
import { render } from '../helpers/view.js';

function App({ items = [], emojis = [], modelNames = [] }) {
    const memberCards = items
        .map(item => (
            <Card
                key={item.id}
                name={item.displayName}
                picture={item.picture}
                href={item.href}
                hrefText="Api url"
            >
                <Emojis emojis={emojis[item.id]} />
                <EmojiPicker onPick={(emoji) => addEmojiForItem(item.id, emoji)} />
            </Card>
        ));

    const objectOptions = [
        {
            label: 'Org unit',
            value: 'organisationUnit',
        },
        {
            label: 'SQLView',
            value: 'sqlView',
        },
        {
            label: 'Legend set',
            value: 'legendSet',
        },
    ];

    return (
        <Content>
            <SelectField items={objectOptions} onChange={loadOtherObjectType} />
            <Cards>
                {memberCards}
            </Cards>
        </Content>
    );
}

export function startApp(state) {
    render(<LoadingMask />);

    d2.getManifest('./manifest.webapp')
        .then(manifest => {
            // d2.init({ baseUrl: `http://localhost:8080/dhis/api` }) // DEV If you do have a webserver change this url to where your dev server runs
            d2.init({ baseUrl: `${manifest.activities.dhis.href}/api` }) // PROD: Use this line if you do not have a webserver and need to upload
                .then(() => initDataStoreForApp())
                .then(() => loadInitialData());
        });

    store.subscribe(() => {
        const state = store.getState();

        render(
            <App
                items={state.items}
                emojis={state.emojis}
                modelNames={state.modelNames}
            />
        );
    });
}
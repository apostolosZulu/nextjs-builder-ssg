import { ButtonInfo } from '@/components/Button';
import { CardInfo } from '@/components/Card';
import {
    Content,
    fetchOneEntry,
    getBuilderSearchParams,
} from '@builder.io/sdk-react-nextjs';

const apiKey = "dae995d4d9b34a2cb6b57cffbb48e9f3";

export default async function Home(props: any) {
    const urlPath = '/' + (props.params?.slug?.join('/') || '');

    const content = await fetchOneEntry({
        model: 'page',
        apiKey,
        options: getBuilderSearchParams(props.searchParams),
        userAttributes: { urlPath },
    });

    return (
        <Content
            content={content}
            model="page"
            apiKey={apiKey}
            customComponents={[CardInfo, ButtonInfo]}
        />
    );
}

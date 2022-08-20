import Page from '@/components/page';
import Section from '@/components/section';
import { Web3Address } from '@/components/Web3Address';
import { Web3Balance } from '@/components/Web3Balance';
import { Web3Network } from '@/components/Web3Network';

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				We grow a lot of rice.
			</h2>

			<div className='mt-2'>
        <h1 className="pb-8 text-4xl font-bold">Home Page</h1>
        <Web3Address />
        <Web3Network />
        <Web3Balance />
			</div>
		</Section>
	</Page>
);

export default Index;

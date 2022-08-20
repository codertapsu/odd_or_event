// const Section = ({ children }: Props) => (
// 	<section>
// 		{children}

// 		<style jsx>{`
// 			section {
// 				padding: var(--gap);
// 			}
// 		`}</style>
// 	</section>
// );
const Section = ({ children }: Props) => (
	<section className='mt-10'>{children}</section>
);

export default Section;

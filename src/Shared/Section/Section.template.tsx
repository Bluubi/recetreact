import { ComponentProps } from 'react'

type SectionProps = ComponentProps<'section'>
const SectionTemplate = ({ ...props }: SectionProps) => {
	return <section role={props.role}>{props.children}</section>
}

export default SectionTemplate

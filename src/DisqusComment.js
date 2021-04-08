import React from 'react';
import { Box } from '@quarkly/widgets';
import { CommentEmbed } from 'disqus-react';

const DisqusComment = ({ 
	commentIDProp,
	showParrent,
	widthProp,
	heightProp,
	...props
}) => {	
	
	return (
		<Box
			width='100%'
			max-height='298px'
			{...props}
		>
      <CommentEmbed
        commentId={commentIDProp}
        showParentComment={showParrent}
        width={widthProp}
        height={heightProp} 
      />	
		</Box> 
	)
};

const propInfo = {
	commentIDProp: {
		title: 'ID Комментария', 
		description: {
			en: 'ID Комментария',
		},
		control: 'input',
		weight: .5
	},
	showParrent: {
		title: 'Show Parrent Comment', 
		description: {
			en: 'Show Parrent Comment',
		},
		control: 'checkbox',
		weight: .5
	},
	widthProp: {
		title: 'Ширина блока', 
		description: {
			en: 'Ширина блока',
		},
		control: 'input',
		weight: .5
	},
	heightProp: {
		title: 'Высота блока', 
		description: {
			en: 'Высота блока',
		},
		control: 'input',
		weight: .5 
	},
};

const defaultProps = {	
	commentIDProp: '5306141969',
	showParrent: false,
	widthProp: '100%',
	heightProp: '200px',
}; 

Object.assign(DisqusComment, { 
	propInfo,
	defaultProps
});

export default DisqusComment;

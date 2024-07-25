import { comments, moreOptions } from "./icon";

export const postWidgetInfo = {
    heading: {
        title: 'Hello Jane',
        subTitle: 'How are you doing today? Would you like to share something with the community 🤗',
    },
    createPostField: {
        title: 'Create Post',
        messageSectionInfo: {
            message: 'How are you feeling today?',
            emoji: '💬',
        },
        secondaryActions: [
            {
                name: 'post',
                title: 'Post'
            }
        ]
    },
    postHistory: [
        {
            id: 1,
            profileImage: 'https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IdtkFCM6nVu2QMMFR1z2r424tndxgDTbsX~ueJErgykjlJ50RPArf0IRhSSHSkTfwv9me55mAYBvE-0zNE6MU0al66Hx6GVCwUa1apDQ9jMGpklT1I2ITuhLFXtDxMVBTh-18mkMg8zdVVNPttNqRWng79T5f0~np8Gs8h3JXXjYFAGbM0X9isrn6YMB1VIG0GHQ8az~S2cFjL4Xk1DSDGvL2MJvMdlFE~8Gx1q9yma0WTxjmbyqok0jXV7At2bLPce1xejVwDC6DkzmY~SarHUOGM3Z2pbQNbb7~~V8XY0m6D2vOvtF2wf9i9H4VgIvaBqMKJGJ8yuW45K3UTUkZQ__',
            userName: 'Theresa Webb',
            lastActive: '5mins ago',
            primaryAction: moreOptions,
            messageSectionInfo: {
                emoji: '👋',
                message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            commentSectionInfo: {
                iconName: comments,
                title: '24 comments'
            },
            edited: false
        },
        {
            id: 2,
            profileImage: 'https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DviYVzpjH7rSrz-xGpG8le~Cw8wX1vUt6IojBCG2aWbn9IJ3R7uejoZKFG5r37arALZhZp-LC67-CIzZ0xpPznyK-woasAAB5DeSD4IcntMt73S7AnERDCx0dBfPdphPKiv0h~syMq2CIh2I2KpWOLSIukJdde3x3I2sBuhfVTCtU7zdX-qSgb4CbxXpPCH37ouGmQ3UFQtle9Gvediflv~y1j03UlO-mAGzXLdVrlBvVOwcEzcJJoCQPTXBTP4SouXSVlbrtcrcVBijdF~08tjtqGi~FVFLwFALRbZucMM1T9U1OHRuTejvNg1k-6s~8CO11V56BTdDar5dfuR2aA__',
            userName: 'Marvin McKinney',
            lastActive: '8mins ago',
            primaryAction: moreOptions,
            messageSectionInfo: {
                emoji: '😞',
                message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            },
            commentSectionInfo: {
                iconName: comments,
                title: '3 comments'
            },
            edited: true
        }
    ]
}
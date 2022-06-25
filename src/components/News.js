import React from 'react';
import {Link, Stack, Typography} from "@mui/material";
import Redacted from '../assets/redacted.png';

const News = () => {
    return (
        <Stack
            alignItems={'center'}
            sx={{
                maxWidth: '1150px',
                padding: '18px',
                background: '#18191A',
                border: '1px solid #28292A',
                boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.35)',
            }}
        >
            <img src={Redacted} alt={"redacted-analysis-2021"} width={'776px'} height={'353px'}/>
            <Typography color={'#999496'} sx={{pt: '4rem', fontSize: '13px'}}>
                Happy Valentine's Day from Redacted, and welcome to our fifth annual <strong style={{color: 'red'}}>Spread
                the Love</strong> charity event! We would like to encourage you all to <strong style={{color: 'red'}}>Spread
                the Love</strong> in the coming days with a donation of <strong>food, clothing, or household goods
                (<strong style={{color: 'red'}}>no cash</strong>) </strong>to your favorite local charity. Although
                there are prizes to be had, any reward we give out could never equal the importance of helping others in
                need. To enter, all one needs to do is post a picture in <Link
                href={""}
                sx={{textDecoration: 'none', color: '#FAF0F0', '&:hover': {color: '#FF9060'}}}>the contest entry thread</Link> of what you are
                honestly donating with your user name clearly visible. <span
                style={{fontStyle: 'italic'}}>Optional:</span> Please feel free to mention anything you would like about
                your charity and why you chose it. At the end of the donation drive, we will have a random drawing from
                all who chose to enter for one of five gift packages including:
                <ul>
                    <li>Custom title</li>
                    <li>Contest winner badge</li>
                    <li>20 gift tokens</li>
                </ul>
                One entry post per person (you may post multiple donations in it if you'd like). The drive will be open for one month, until midnight site time on March 13. We look forward to seeing you all <strong style={{color: 'red'}}>Spread
                the Love</strong> outside Redacted once again. Special thanks to <Link
                href={""}
                sx={{textDecoration: 'none', color: '#FAF0F0', '&:hover': {color: '#FF9060'}}}>ilikepeaches</Link> for the new logo.
            </Typography>
        </Stack>
    );
};

export default News;
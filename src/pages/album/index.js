import React from 'react';
import Layout from '@theme/Layout';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles.css'
const PhotoAlbum = () => {
    const photos = [
        {
          year: 2024,
          images: [
            { src: 'https://static.qxazusa.xyz/blog/album/cos/IMG_20220223_161738~2.png', description: '图片1的说明' }
          ]
        },
        {
          year: 2023,
          images: [
            { src: 'https://static.qxazusa.xyz/blog/album/cos/20220223163708.jpg', description: '图片2的说明' }
          ]
        },
        // 添加更多年份和图片
      ];

  return (
    <Layout title="相册" description="这是一个相册页面">
      <div style={{ padding: '2rem' }}>
        <h1>Demo</h1>
        <VerticalTimeline>
          {photos.map((photo, index) => (
            <VerticalTimelineElement
            key={index}
            date={photo.year.toString()}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.6)' }} // 缩小节点大小
            contentStyle={{ textAlign: 'left' }} // 左对齐内容
            icon={<div className="custom-icon"></div>} // 使用自定义图标
          >
              {photo.images.map((image, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <img src={image.src} alt={`图片${idx + 1}`} style={{ width: '100%' }} />
                  <p>{image.description}</p>
                </div>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Layout>
  );
};

export default PhotoAlbum;

import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Tab, Tabs } from '@/components/Tabs'
import { OpenAPI } from '@/components/openapi'
import { Tag } from '@markdoc/markdoc';

const tags = {
  openapi: {
    attributes: {
      url: { type: String },
    },
    render: OpenAPI,
  },
  callout: {
    attributes: {
      title: { type: String },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  tabs: {
    render: Tabs,
    attributes: {},
    transform(node, config) {
      const labels = node
        .transformChildren(config)
        .filter((child) => child && child.name === 'Tab')
        .map((tab) => (typeof tab === 'object' ? tab.attributes.label : null));

      return new Tag(this.render, { labels }, node.transformChildren(config));
    }
  },
  tab: {
    render: Tab,
    attributes: {
      label: {
        type: String
      }
    }
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags


/*****************
CALLOUT EXAMPLE

{% callout type="warning" title="Note" %}
  text
{% /callout %}

*****************/

/*****************
TABS EXAMPLE

{% tabs %}
{% tab label="Request" %}
{% /tab %}
{% tab label="Response" %}
{% /tab %}
{% /tabs %}

*****************/
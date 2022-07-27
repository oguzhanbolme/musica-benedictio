import React, { useEffect, useRef } from 'react'
import { OrgChart } from 'd3-org-chart'

export default function Chart({ rootArtist, artists }) {
    const d3Container = useRef(null)

    function nodeTemplate(artist) {
        return `
        <div class="flex flex-col items-center gap-2">
            <img class="w-36 h-36 rounded-full border" src="${artist.images[0]?.url}" alt="Rounded avatar">
            <span class="font-bold text-xl">${artist.name}</span>
        </div>
        `
    }

    useEffect(() => {
        const data = []

        for (let i = 0; i < artists.length; i++) {
            const artist = artists[i]
            const nextArtist = artists[i + 1] || rootArtist

            if (i % 2 === 0) data.push({ ...artist, parentId: nextArtist.id })
            else data.push({ ...artist, parentId: rootArtist.id })
        }
        data.push({ ...rootArtist, parentId: null })

        const chart = new OrgChart()
        chart
            .nodeHeight(() => 250)
            .nodeWidth(() => 145)
            .compactMarginBetween(() => 100)
            .compactMarginPair(() => 100)
            .childrenMargin(() => 100)
            .neightbourMargin(() => 100)
            .siblingsMargin(() => 100)
            .nodeId((artist) => artist.id)
            .parentNodeId((artist) => artist.parentId)
            .nodeContent((d) => nodeTemplate(d.data))
            .onNodeClick((id) => {
                const clickedArtist = data.find((artist) => artist.id === id)
                window.open(clickedArtist.external_urls.spotify, '_blank')
            })
            .container(d3Container.current)
            .data(data)
            .initialZoom(0.8)
            .render()
            .expandAll()
    }, [])

    return <div className="w-full" ref={d3Container} />
}

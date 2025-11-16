'use client';
import { notFound } from "next/navigation";
import AI_TOOLS_DATA from "@/data/data";
import DetailPage from "@/components/DetailPage";
import { useParams } from 'next/navigation'

export default function ToolPage() {
    const params = useParams();
    const { id } = params;
    const toolId = parseInt(id as string, 10);
    const tool = AI_TOOLS_DATA.find((t) => t.id === toolId);
    if (!tool) {
        notFound();
    }

    return (
        <DetailPage tool={tool} />
    );
}
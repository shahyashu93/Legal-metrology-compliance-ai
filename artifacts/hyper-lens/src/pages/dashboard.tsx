import { useScans } from "@/lib/store";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Filter, Plus, ArrowUpRight, BarChart3, Activity, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const { analyses } = useScans();

  const totalScans = analyses.length;
  const compliantScans = analyses.filter(a => a.overallStatus === 'compliant').length;
  const warningScans = analyses.filter(a => a.overallStatus === 'warning').length;
  const criticalScans = analyses.filter(a => a.overallStatus === 'missing').length;

  const averageScore = totalScans > 0 
    ? Math.round(analyses.reduce((acc, curr) => acc + curr.score, 0) / totalScans) 
    : 0;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">Overview</h1>
          <p className="font-mono text-muted-foreground">Recent compliance assessments and system metrics.</p>
        </div>
        <Link href="/demo">
          <Button className="font-mono uppercase tracking-widest">
            <Plus className="w-4 h-4 mr-2" /> New Scan
          </Button>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="rounded-none border-thin shadow-none bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Total Scans</span>
              <Activity className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-4xl font-sans font-bold">{totalScans}</div>
          </CardContent>
        </Card>
        
        <Card className="rounded-none border-thin shadow-none bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Avg Score</span>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-4xl font-sans font-bold">{averageScore}</div>
          </CardContent>
        </Card>

        <Card className="rounded-none border-thin shadow-none bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Compliant</span>
              <div className="w-2 h-2 rounded-full bg-success mt-1" />
            </div>
            <div className="text-4xl font-sans font-bold">{compliantScans}</div>
          </CardContent>
        </Card>

        <Card className="rounded-none border-thin shadow-none bg-accent text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs opacity-80 uppercase tracking-widest">Critical Issues</span>
              <AlertCircle className="w-4 h-4 opacity-80" />
            </div>
            <div className="text-4xl font-sans font-bold">{criticalScans}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Scans Table */}
      <div className="bg-white border border-thin border-border">
        <div className="p-4 border-b border-thin border-border flex justify-between items-center bg-background">
          <h2 className="font-sans font-bold uppercase tracking-wide text-sm">Recent Assessments</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 border-thin bg-white"><Filter className="w-3 h-3 mr-2" /> Filter</Button>
            <Button variant="outline" size="sm" className="h-8 border-thin bg-white"><Search className="w-3 h-3 mr-2" /> Search</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead>
              <tr className="border-b border-thin border-border bg-background/50">
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider">Assessment ID</th>
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider">Product</th>
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider">Date</th>
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider">Score</th>
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider">Status</th>
                <th className="p-4 font-normal text-muted-foreground uppercase text-xs tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {analyses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted-foreground">
                    No scans recorded yet. Run a demo to see data.
                  </td>
                </tr>
              ) : (
                analyses.map((analysis) => (
                  <tr key={analysis.assessmentId} className="border-b border-thin border-border last:border-0 hover:bg-background transition-colors group">
                    <td className="p-4 text-muted-foreground">{analysis.assessmentId}</td>
                    <td className="p-4 font-sans font-bold text-base">{analysis.productName}</td>
                    <td className="p-4">{new Date(analysis.timestamp).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className={`font-bold ${analysis.score >= 90 ? 'text-success' : analysis.score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                        {analysis.score}/100
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge variant={analysis.overallStatus as any} className="text-[10px]">
                        {analysis.overallStatus.replace('-', ' ')}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Link href={`/results`}>
                         {/* Setting context before navigation is handled globally for this demo, 
                             but here we assume currentAnalysis gets set or we just navigate to latest.
                             In a real app, /results/:id */}
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity uppercase text-xs tracking-widest">
                          View <ArrowUpRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

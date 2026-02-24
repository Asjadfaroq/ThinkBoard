import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router";
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { ArrowLeftIcon } from "lucide-react";
import { LoaderIcon, TrashIcon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Error in Fetching Note");
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  const handleDelete = () => {

  }

  if (loading) {
    <div className='min-h-screen bg-base-200 flex items-center justify-center'>
      <LoaderIcon className='animate-spin size-10' />
    </div>
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className='flex items-center justify-between mb-6'>
            <Link to={"/"} className='btn btn-ghost'>
              <ArrowLeftIcon className='size-5' />
              Back to Notes
            </Link>

            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <TrashIcon className='size-5' />
              Delete Note
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage